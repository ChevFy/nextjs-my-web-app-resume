
interface dataText
{
    footer : string
}

export default function Footer({dataText} : { dataText : dataText } ) {
    return (
        <footer className="w-full bg-gray-950/50 py-6">
            <div className="mx-auto max-w-6xl px-6 text-center text-md text-slate-300">
                {dataText.footer}
            </div>
        </footer>
    );
}