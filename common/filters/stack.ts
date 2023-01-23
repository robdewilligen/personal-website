import StackType from "../enums/StackType";

export default function (input) {

    switch (input) {

        case StackType.VUE:
            return "Vue";

        case StackType.LARAVEL:
            return "Laravel";
    }
}