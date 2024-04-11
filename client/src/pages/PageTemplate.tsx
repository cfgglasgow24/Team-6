interface PageTemplateProps {
    title: string;
    children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
    return (
        <div className="max-w-[900px] mx-auto p-[20px]">
            <h1 className="text-xl font-bold ">{title}</h1>
            {children}
        </div>
    );
}
