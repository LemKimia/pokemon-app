import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Catch from "@/pages/catch.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Catch">
                <Catch/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;