import { ChooseFormContainer } from "./style";
import { BasicCard } from "../exports";

const ChooseForm = () => {

    return (
        <ChooseFormContainer>
            <BasicCard title="Circle" />
            <BasicCard title="Triangle"/>
            <BasicCard title="Square"/>

        </ChooseFormContainer>
    )
};

export default ChooseForm;