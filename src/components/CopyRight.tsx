import { Copyright } from "lucide-react";

export function CopyRight() {
  return (
    <div className="w-full h-12 bg-gray-100 dark:bg-black transition-colors duration-300">
      <div className="flex h-full items-center">
        <h1 className="flex m-auto text-black dark:text-white text-sm font-medium">
          <Copyright className="text-black dark:text-white" />
          &nbsp; All rights reserved @RishabhParsediya
        </h1>
      </div>
    </div>
  );
}
