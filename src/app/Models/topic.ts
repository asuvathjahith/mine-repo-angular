
import { Assigment } from "./assignments";
import { Attendance } from "./attendance";

import { Course } from "./course";

export interface Topic {
    id: number;
    courseId: number;
    name: string;
    duration: string;
    context: string;
    isDisabled: boolean;
    course: Course | null;
    attendances: Attendance[] | null;
    assigments: Assigment[] | null;

}