import { Button } from "@extension/design-system";
import React from "react";

interface Props {
  version: string;
}

const AboutView = ({ version }: Props) => {
  return (
    <div className="flex flex-col space-y-3 p-1 mt-4">
      <p className="text-sm text-slate-700 dark:text-slate-200">
        This browser extension template was made with love by Shy Alter. Please
        support the project at{" "}
        <a
          href="https://github.com/puemos/browser-extension-template"
          target="_blank"
          className="text-black dark:text-white underline"
        >
          https://github.com/puemos/browser-extension-template
        </a>
      </p>

      <div className="p-3 h-16 flex shrink-0 items-center justify-between rounded-md border bg-slate-100 dark:bg-slate-800">
        <div>
          <p className="text-sm font-semibold">
            <span aria-label="plant" role="img" className="mr-2">
              🌱
            </span>
            Version
          </p>
        </div>
        <div className="text-sm font-semibold">{version}</div>
      </div>
      <div className="p-3 h-16 flex shrink-0 items-center justify-between rounded-md border bg-slate-100 dark:bg-slate-800">
        <div>
          <p className="text-sm font-semibold">
            <span aria-label="plant" role="img" className="mr-2">
              🐞
            </span>
            Report a bug
          </p>
        </div>
        <Button size="sm">Report</Button>
      </div>
    </div>
  );
};

export default AboutView;
