type Props = {
    title: string;
    subtitle?: string;
    center?: boolean;
};

export default function Heading({ title, subtitle, center }: Props) {
    return (
        <div className={`mb-4 ${center ? 'text-center' : 'text-left'}`}>
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && <h2 className="text-lg text-gray-600">{subtitle}</h2>}
        </div>
    );
}
