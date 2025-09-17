/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { generateStyledImage } from './services/geminiService';
import Header from './components/Header';
import Spinner from './components/Spinner';
import StyleSelectionScreen from './components/StartScreen';
import ImageUploader from './components/ImageUploader';
import Footer from './components/Footer';
import { SparkleIcon, UploadIcon, RedoIcon, FacebookIcon } from './components/icons';

const App: React.FC = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState<{ prompt: string; name: string } | null>(null);
  const [selectedStyleName, setSelectedStyleName] = useState<string | null>(null);
  
  const originalImageUrl = useMemo(() => {
    if (originalFile) {
      return URL.createObjectURL(originalFile);
    }
    return null;
  }, [originalFile]);

  // Clean up the object URL when the component unmounts or the file changes
  useEffect(() => {
    return () => {
      if (originalImageUrl) {
        URL.revokeObjectURL(originalImageUrl);
      }
    };
  }, [originalImageUrl]);

  const handleStyleSelect = useCallback(async (prompt: string, name: string) => {
    if (!originalFile) return;

    setLastPrompt({ prompt, name });
    setSelectedStyleName(name);
    setIsLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      const imageUrl = await generateStyledImage(originalFile, prompt);
      setGeneratedImageUrl(imageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error(err);
      setError(`معليش، حصل خطأ وحنا نجهز الصورة. جرب مرة ثانية. (${errorMessage})`);
    } finally {
      setIsLoading(false);
    }
  }, [originalFile]);
  
  const handleRetry = useCallback(() => {
    if (lastPrompt) {
        handleStyleSelect(lastPrompt.prompt, lastPrompt.name);
    }
  }, [lastPrompt, handleStyleSelect]);

  const handleStartOver = useCallback(() => {
    setGeneratedImageUrl(null);
    setOriginalFile(null);
    setError(null);
    setIsLoading(false);
    setLastPrompt(null);
    setSelectedStyleName(null);
  }, []);
  
  const handleTryAnotherStyle = useCallback(() => {
    setGeneratedImageUrl(null);
    setError(null);
  }, []);

  const handleDownload = useCallback((format: 'jpg' | 'png') => {
    if (!generatedImageUrl) return;

    const filename = `yemeni-kashkha-${Date.now()}`;

    if (format === 'png') {
        const link = document.createElement('a');
        link.href = generatedImageUrl;
        link.download = `${filename}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else { // jpg
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Since JPG does not support transparency, draw a white background first.
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0);

                const jpegUrl = canvas.toDataURL('image/jpeg', 0.9); // 0.9 specifies quality
                const link = document.createElement('a');
                link.href = jpegUrl;
                link.download = `${filename}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        };
        image.src = generatedImageUrl;
    }
  }, [generatedImageUrl]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center animate-fade-in flex flex-col items-center justify-center gap-6">
          <Spinner />
          <h2 className="text-2xl font-bold text-gray-200">شويه بس...</h2>
          <p className="text-lg text-gray-400">الذيب يجهز لك الصورة</p>
        </div>
      );
    }

    if (error) {
       return (
           <div className="text-center animate-fade-in bg-red-500/10 border border-red-500/20 p-8 rounded-lg max-w-2xl mx-auto flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-red-300">حصلت مشكلة</h2>
            <p className="text-md text-red-400">{error}</p>
            <button
                onClick={handleStartOver}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors mt-4"
              >
                جرب من جديد
            </button>
          </div>
        );
    }
    
    if (generatedImageUrl) {
      return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 animate-fade-in">
          <div className="w-full shadow-2xl rounded-xl overflow-hidden bg-black/20">
            <img 
              src={generatedImageUrl} 
              alt="Generated patriotic image"
              className="w-full h-auto object-contain max-h-[70vh] rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
                <button 
                    onClick={() => handleDownload('jpg')}
                    className="bg-gradient-to-br from-red-700 to-red-600 text-white font-bold py-4 px-8 text-lg rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner"
                >
                    حمّل JPG
                </button>
                <button 
                    onClick={() => handleDownload('png')}
                    className="bg-white/10 border border-white/20 text-gray-200 font-semibold py-4 px-8 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 active:scale-95 text-lg"
                >
                    حمّل PNG
                </button>
                <a 
                  href="https://www.facebook.com/share/1BLcTuSo2w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-br from-blue-700 to-blue-600 text-white font-bold py-4 px-8 text-lg rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner"
                >
                    <FacebookIcon className="w-6 h-6" />
                    شاركني النتيجة
                </a>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
                <button 
                    onClick={handleRetry}
                    className="flex items-center justify-center text-center bg-white/10 border border-white/20 text-gray-200 font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 active:scale-95 text-base"
                >
                    <RedoIcon className="w-5 h-5 ml-2" />
                    إعادة المحاولة
                </button>
                <button 
                    onClick={handleTryAnotherStyle}
                    className="flex items-center justify-center text-center bg-white/10 border border-white/20 text-gray-200 font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 active:scale-95 text-base"
                >
                    <SparkleIcon className="w-5 h-5 ml-2" />
                    جرب تصميم ثاني
                </button>
            </div>

            <p className="text-sm text-gray-500 max-w-md text-center px-4">
                ملاحظة: إذا ما عجبتك النتيجة، جرب "إعادة المحاولة" للحصول على شكل مختلف بنفس التصميم.
            </p>
              
            <button 
                onClick={handleStartOver}
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-base mt-2"
            >
                ابدأ من جديد بصورة أخرى
            </button>
          </div>
        </div>
      );
    }
    
    if (originalFile && originalImageUrl) {
        return <StyleSelectionScreen onStyleSelect={handleStyleSelect} originalImageUrl={originalImageUrl} />;
    }
    
    return <ImageUploader onFileUploaded={setOriginalFile} />;
  };
  
  return (
    <div className="min-h-screen text-gray-100 flex flex-col">
      <Header title={selectedStyleName ?? undefined} />
      <main className="flex-grow w-full max-w-[1600px] mx-auto p-4 md:p-8 flex justify-center items-center">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
