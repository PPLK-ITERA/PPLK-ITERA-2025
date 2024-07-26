import { Switch } from "@headlessui/react";

import { useState } from "react";

const AttendanceToggle = () => {
    const [isPresent, setIsPresent] = useState(false);

    return (
        <div className="flex items-center space-x-2">
            <label
                htmlFor="attendance-switch"
                className={isPresent ? "text-gray-500" : "text-black"}
            >
                Tidak Hadir
            </label>
            <Switch
                id="attendance-switch"
                checked={isPresent}
                onChange={() => setIsPresent(!isPresent)}
                className={`${
                    isPresent ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span
                    className={`${
                        isPresent ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full`}
                />
            </Switch>
            <label
                htmlFor="attendance-switch"
                className={isPresent ? "text-black" : "text-gray-500"}
            >
                Hadir
            </label>
        </div>
    );
};

export default AttendanceToggle;
