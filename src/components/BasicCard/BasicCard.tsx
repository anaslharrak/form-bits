import { BasicCardContainer } from "./style";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setForm } from "../../redux/slices/formSlice";

interface BasicCardProps {
    title: string;
}

const  BasicCard: FC<BasicCardProps> = ({ title }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setForm(title));
    };

    return (
        <BasicCardContainer onClick={handleClick}>
            <h1>IMAGE</h1>
            <h3>{title}</h3>
        </BasicCardContainer>
    );
};

export default BasicCard;