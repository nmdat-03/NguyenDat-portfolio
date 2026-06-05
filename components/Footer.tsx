export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-4">
            <div className="px-4 flex justify-end items-center text-sm text-white/50 md:flex-row">
                <p>
                    © {new Date().getFullYear()} Nguyen Dat. All rights reserved.
                </p>
            </div>
        </footer>
    );
}