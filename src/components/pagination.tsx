import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "./ui/button";

interface Props {
    gotoNextPage: (() => void) | null;
    gotoPreviousPage: (() => void) | null;
}

const Pagination: React.FC<Props> = ({gotoNextPage, gotoPreviousPage}) => {
    return (
        <div className="flex flex-row justify-center">
            {gotoPreviousPage && (
                <Button variant="ghost" size="icon" onClick={gotoPreviousPage}>
                    <ChevronLeft className="h-4 w-4"/>
                </Button>
            )}
            {gotoNextPage && (
                <Button variant="ghost" size="icon" onClick={gotoNextPage}>
                    <ChevronRight className="h-4 w-4"/>
                </Button>
            )}
        </div>
    );
};

export default Pagination;
