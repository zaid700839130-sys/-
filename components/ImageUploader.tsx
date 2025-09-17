/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useCallback, useRef } from 'react';
import { UploadIcon } from './icons';

interface ImageUploaderProps {
  onFileUploaded: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileUploaded }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUploaded(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onFileUploaded(file);
    }
  }, [onFileUploaded]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center p-4 md:p-8 animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-100 sm:text-6xl md:text-7xl leading-tight">
          حوّل صورتك إلى <span className="text-red-400">هوية يمانية دون أن ننسى فلسطين وغزة</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 md:text-xl">
          ارفع صورتك، واختر الستايل اللي يعجبك، والباقي على الذكاء الاصطناعي يضبط لك صورة بالهوية اليمانية دون أن ننسى فلسطين وغزة اللي اخترتها.
        </p>
      </div>
      
      <div 
        className="mt-12 w-full p-8 border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-red-400 hover:bg-white/5 transition-all duration-300"
        onClick={handleButtonClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        role="button"
        aria-label="Upload an image"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleButtonClick()}
      >
        <UploadIcon className="w-16 h-16 text-gray-500" />
        <p className="text-xl font-semibold text-gray-300">اسحب صورتك هنا أو اضغط للرفع</p>
        <p className="text-gray-500">ادعمنا بصورة واضحة عشان يطلع التصميم أحلى</p>
        <button
          type="button"
          className="mt-4 bg-gradient-to-br from-red-700 to-red-600 text-white font-bold py-3 px-8 text-lg rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner"
        >
          اختر صورة
        </button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        id="image-upload"
      />
    </div>
  );
};

export default ImageUploader;