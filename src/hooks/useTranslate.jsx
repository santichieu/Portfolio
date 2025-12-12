import { useContext } from 'react'
import { TranslateContext } from '../contexts/Translate.context';
import { translation_dictionary } from './translate.dictionary';

export const useTranslate = () => {
    const ctx = useContext(TranslateContext);
    const language = ctx?.language || 'es';
    return (key) => {
        const translation = translation_dictionary[language]
            ? translation_dictionary[language].find(t => t.key === key)?.value
            : translation_dictionary["es"].find(t => t.key === key)?.value;
        return translation || key;
    }
}