import React from "react";

import { IconLoader, IconLoader2 } from "@tabler/icons-react";

type Props = { className?: string };

function RelasiLoading({ className }: Props) {
  return (
    <div className={`w-6 h-6 ${className} grid place-content-center`}>
      <IconLoader2 className="animate-spin" />
    </div>
  );
}

export default RelasiLoading;
