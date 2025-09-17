/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { XIcon } from './icons';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            name: 'X',
            href: 'https://x.com/Salem_Mosabi',
            icon: XIcon,
            profileImage: 'https://raw.githubusercontent.com/trya5806-oss/yemenflag/main/123.png',
        }
    ];

    return (
        <footer className="w-full py-10 px-8 mt-auto bg-gray-900">
            <div className="flex flex-col items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Salem Mosabi on ${link.name}`}
                            className="flex items-center gap-6 transition-transform duration-300 hover:scale-110 hover:text-red-400"
                        >
                            {/* أيقونة منصة X أكبر */}
                            <link.icon className="w-24 h-24 text-blue-400" />

                            {/* صورة الحساب الشخصية أكبر */}
                            {link.profileImage && (
                                <img 
                                    src={link.profileImage} 
                                    alt="Salem Mosabi" 
                                    className="w-24 h-24 rounded-full border-4 border-blue-400 object-cover"
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* النص بخط كبير وواضح */}
                <p className="text-3xl font-extrabold text-center text-red-400 max-w-3xl">
                     المشروع مفتوح المصدر من مطور يسمى (الأمين عجلان) وللأمانة تم عمل نسخة وتم تعديل بعض التصاميم ولتشمل الشال الفلسطيني .. تحياتي أخوكم سالم المصعبي واعتقد أستحق الدعم عبر دخول الصفحة من الصورة وعمل متابعة
                </p>
            </div>
        </footer>
    );
};

export default Footer;
