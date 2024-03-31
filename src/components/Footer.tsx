import { CopyRight } from "./CopyRight";
import { Links } from "./Links";

export function Footer() {
    return (
        <div className="w-full flex flex-col justify-center">
            <Links />
            <CopyRight />
        </div>
    )
}