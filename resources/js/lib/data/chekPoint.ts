import bg_1 from "!assets/checkPoint/bg-1.png";

export interface DataChekPoin {
    name: string,
    title: string,
    description: string,
    bg_image: any,
    checkBoxData: any[],
}

export const Data_Page_ChekPoint = [
    {
        name: "day-1",
        title: "QUEST DAY 1",
        description1: "Lorem ipsum dolor sit amet consectetur. Augue vulputate mattis vestibulum fames metus a quis commodo bibendum. Et morbi penatibus pulvinar arcu arcu feugiat nibh eros.",
        bg_image: bg_1,
        checkBoxData: [
            {
                1: "satu",
                2: "dua",
                3: "tiga",
            },
        ],
        description2: "Lorem ipsum dolor sit amet consectetur. Augue vulputate mattis vestibulum fames metus a quis commodo bibendum. Et morbi penatibus pulvinar arcu arcu feugiat nibh eros. Augue vulputate mattis vestibulum fames metus a quis commodo bibendum. Et morbi penatibus pulvinar arcu arcu feugiat eros."
    },
]