import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

type PaginationProps = {
  gotoNextPage: (() => void) | null;
  gotoPreviousPage: (() => void) | null;
};

const CustomPagination = ({
  gotoNextPage,
  gotoPreviousPage,
}: PaginationProps) => {
  return (
    <Pagination>
      <PaginationContent className="justify-center">
        {gotoPreviousPage && (
          <PaginationItem>
            <PaginationPrevious
              onClick={gotoPreviousPage}
              className="cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </PaginationPrevious>
          </PaginationItem>
        )}
        {gotoNextPage && (
          <PaginationItem>
            <PaginationNext onClick={gotoNextPage} className="cursor-pointer">
              <ChevronRight className="h-4 w-4" />
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
