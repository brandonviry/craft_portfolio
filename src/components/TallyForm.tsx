'use client';
import { useEffect } from 'react';

interface TallyFormProps {
  formId: string;
  height?: number;
}

export default function TallyForm({ formId, height = 500 }: TallyFormProps) {
  useEffect(() => {
    // @ts-ignore
    if (window.Tally) window.Tally.loadEmbeds();
  }, []);

  return (
    <div className="w-full relative p-[1px] rounded-lg bg-gradient-to-r from-[#00A8E8] via-[#FF3B3F] to-[#00A8E8] bg-size-200 hover:bg-pos-100 transition-all duration-500">
      <div className="bg-black rounded-lg">
        <iframe
          data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
          loading="lazy"
          width="100%"
          height={height}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Formulaire de contact"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
