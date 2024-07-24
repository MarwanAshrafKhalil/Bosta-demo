import { useTranslation } from 'react-i18next';

type HelpDivProps = {
  headline: string;
  buttonText: string;
  image: string;
};

export default function HelpDiv({ headline, buttonText, image }: HelpDivProps) {
  const [t] = useTranslation();

  return (
    <div className="flex flex-row-reverse bg-white items-center justify-between gap-2 rounded-xl border p-2">
      <img src={image} alt="image" className="object-contain w-24 " />
      <div className="flex flex-col gap-2">
        <p>{t(`${headline}`)}</p>
        <button className="rounded-full bg-primary text-white text-base">
          {t(`${buttonText}`)}
        </button>
      </div>
    </div>
  );
}
