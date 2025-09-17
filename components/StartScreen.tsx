/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { SparkleIcon } from './icons';

interface Style {
    name: string;
    description: string;
    prompt: string;
}
const styles: Style[] = [
    {
        name: 'الأفضل كونه بحافظ على ملابسك - وشاح يمني مع فلسطيني',
        description: 'وقفة في استوديو مظلم، والعلم اليمني يلتف على الكتفين، والشال الفلسطيني حول الرقبة، مع إضاءة درامية لعرض تفاصيل العلم والزي بدقة.',
        prompt: `Apply this prompt to the person in the uploaded image: Standing in a dark studio. The Yemeni flag—consisting only of solid red, white, and black horizontal stripes with no additional colors, stars, or shapes—is draped around their shoulders. The person is wearing a Palestinian scarf around their neck and clothing that exactly matches, or is faithfully inspired to the point of full accuracy, by the outfit worn in the uploaded image. Dramatic lighting highlights the flag and outfit details, and the background is plain black, creating a professional portrait.`
    },
    {
        name: 'الهوية الوطنية مع شال فلسطيني',
        description: 'وقفة ثقة وعزة، والعلم يلف الصدر بدفء وحب للوطن، مع شال فلسطيني حول الرقبة.',
        prompt: `A photorealistic portrait of the person from the uploaded photo, matching their facial features exactly, standing confidently against a radiant red background blended with dark tones for depth. They are wrapped in a flag of three horizontal colors (red, white, black, without additional symbols), holding it near the chest. The person is wearing a Palestinian scarf around the neck. Wearing dark clothing, with dramatic cinematic lighting focused on the face to create a bold, emotional, and professional atmosphere. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    {
        name: 'شموخ يماني مع شال فلسطيني',
        description: 'نظرة للأعلى تملؤها العزيمة والأمل، والعلم رمز للفخر والإباء، مع شال فلسطيني حول الرقبة.',
        prompt: `A photorealistic portrait of the person from the uploaded photo, matching their facial features exactly, wrapped in a tricolor flag (red, white, black, no extra symbols), holding it close to the chest. The person is wearing a Palestinian scarf around the neck. The subject tilts the head upward, eyes gazing toward the light above, symbolizing hope and determination. The background glows in deep red shades, while dramatic lighting emphasizes the face and creates a powerful, cinematic effect. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    {
        name: 'هيبة يمانية مع شال فلسطيني',
        description: 'زاوية جانبية تبرز ملامح الفخر، والعلم يزين الكتف كرمز للعزة، مع شال فلسطيني حول الرقبة.',
        prompt: `A photorealistic side-profile portrait of the person from the uploaded photo, matching their facial features exactly, with clear details against a dark background accented with abstract glowing red lights. A tricolor flag (red, white, black, no additional symbols) drapes loosely over the shoulder like a flowing fabric. The person is wearing a Palestinian scarf around the neck. The subject looks forward with a confident expression, while cinematic lighting highlights facial contours, creating a modern and dramatic atmosphere. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    {
        name: 'فخر يماني مع شال فلسطيني',
        description: 'العلم يغطي الظهر والكتفين، مع التفاتة واثقة نحو الكاميرا، وإضاءة سينمائية تبرز ثنايا العلم وفخامة المشهد، مع شال فلسطيني حول الرقبة.',
        prompt: `A person draped in a tricolor flag (red, white, black, no symbols) covering the back and shoulders, as uploaded photo exactly. The person is wearing a Palestinian scarf around the neck. The subject turns the head toward the camera, with a professional gradient black background and dramatic cinematic lighting that emphasizes the folds of the flag, creating a bold patriotic scene.`
    },
    {
        name: 'نظرة وطن',
        description: 'وقفة من الخلف ونظرة جانبية للكاميرا، مع علم يلف الظهر والكتفين بفخر، وخلفية سوداء احترافية تبرز هيبة المشهد، مع شال فلسطيني حول الرقبة.',
        prompt: `A person seen from behind, draped in a tricolor flag (red, white, black, no symbols) covering the back and shoulders, as uploaded photo exactly. The person is wearing a Palestinian scarf around the neck. The subject faces forward but slightly turns the head back toward the camera. Background is a professional gradient black with dramatic cinematic lighting emphasizing the folds of the flag, creating a bold and patriotic scene.`
    },
    {
        name: 'لهيب الفخر مع شال فلسطيني',
        description: 'صورة تحاكي القوة، مع خلفية من دخان أحمر وأسود ناري، وإضاءة سينمائية تبرز ملامح العزم، مع شال فلسطيني حول الرقبة.',
        prompt: `A photorealistic portrait of the person from the uploaded photo, matching their facial features exactly, wrapped in a tricolor flag (red, white, black, with no extra symbols), standing against a dark background with fiery red and black smoke swirling behind. The person is wearing a Palestinian scarf around the neck. Dramatic cinematic lighting illuminates the face while shadows carve deep lines, creating an intense and intimidating atmosphere. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    {
        name: 'غموض القوة مع شال فليطيني',
        description: 'إضاءة نصفية جريئة تكشف جانبًا من الوجه وتخفي الآخر في الظل، لتعكس قوة غامضة وهيبة لا تقاوم، مع شال فلسطيني حول الرقبة.',
        prompt: `A half-lit photorealistic portrait of the person from the uploaded photo, matching their facial features exactly, in dark clothing, wrapped in a tricolor flag (red, white, black, with no extra symbols). The person is wearing a Palestinian scarf around the neck. One side of the face is in bright dramatic light, the other in total shadow. The background glows with dark crimson tones, evoking power, mystery, and fear. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    {
        name: 'قلب واحد مع شال فلسطيني',
        description: 'وقفة تجمع بين علمي اليمن وفلسطين، مع الكوفية رمز العزة، لتجسد تضامنًا لا ينكسر.',
        prompt: `A realistic and powerful portrait of the person from the uploaded photo, matching their facial features exactly, standing confidently against a dark dramatic background with subtle glowing light. The subject is wrapped with two intertwined flags: the Yemeni flag (red, white, black, with no extra symbols) and the Palestinian flag (black, white, green, with a red triangle), flowing together as one. Around the neck, the person wears a traditional Palestinian keffiyeh (black and white patterned scarf). The clothing is dark, with cinematic lighting focused on the face and flags, creating a bold, emotional, and unifying atmosphere that symbolizes solidarity between Yemen and Palestine. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    {
        name: 'رمز الأخوة مع شال فلسطيني',
        description: 'الكوفية رمز الأصالة، والأعلام تتقاطع على الصدر كدليل على الأخوة والتضامن الراسخ.',
        prompt: `A cinematic, photorealistic portrait of the person from the uploaded photo, matching their facial features exactly, wearing a traditional Palestinian keffiyeh around the neck, while holding two flags—the Yemeni flag (red, white, black, with no extra symbols) and the Palestinian flag—crossed together in front of the chest. Dark dramatic background with glowing red and black tones, and focused lighting on the face and flags, symbolizing unity and strength. The final output must be a square image with a 1:1 aspect ratio, cropping the result if necessary.`
    },
    
];


interface StyleSelectionScreenProps {
  onStyleSelect: (prompt: string, name: string) => void;
  originalImageUrl: string;
}

const StyleSelectionScreen: React.FC<StyleSelectionScreenProps> = ({ onStyleSelect, originalImageUrl }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex-shrink-0">
                <img src={originalImageUrl} alt="Uploaded" className="w-48 h-48 object-cover rounded-xl shadow-lg"/>
            </div>
            <div className="text-center md:text-right">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl leading-tight">
                  صورتك جاهزة!
                </h1>
                <p className="max-w-2xl mt-4 text-lg text-gray-400 md:text-xl">
                  الحين اختر الستايل اللي يعجبك عشان نطبقه على صورتك.
                </p>
            </div>
        </div>
        
        <div>
            <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">اختر تصميم الهوية:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {styles.map((style) => (
                    <div
                        key={style.name}
                        onClick={() => onStyleSelect(style.prompt, style.name)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onStyleSelect(style.prompt, style.name)}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-start gap-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 group h-full"
                        aria-label={`اختر ستايل: ${style.name}`}
                    >
                        <div className="bg-red-500/10 p-4 rounded-full">
                           <SparkleIcon className="w-8 h-8 text-red-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100 mt-2">{style.name}</h3>
                        <p className="text-gray-400 text-center flex-grow">{style.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default StyleSelectionScreen;
