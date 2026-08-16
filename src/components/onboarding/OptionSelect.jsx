import * as S from "./OptionSelect.styled"
import readingIcon from "../../assets/icons/OnboardingIcons/reading.svg";
import listeningIcon from "../../assets/icons/OnboardingIcons/listening.svg";
import stretchingIcon from "../../assets/icons/OnboardingIcons/stretching.svg";
import mindControlIcon from "../../assets/icons/OnboardingIcons/mind-control.svg";

import movingIcon from "../../assets/icons/OnboardingIcons/moving.svg";
import beforeAppointmentIcon from "../../assets/icons/OnboardingIcons/before-appointment.svg";
import restingTimeIcon from "../../assets/icons/OnboardingIcons/resting-time.svg";
import workingIcon from "../../assets/icons/OnboardingIcons/working.svg";

import trendTopicIcon from "../../assets/icons/OnboardingIcons/trend-topic.svg";
import mentalCareIcon from "../../assets/icons/OnboardingIcons/mental-care.svg";
import exerciseIcon from "../../assets/icons/OnboardingIcons/exercise.svg";
import restIcon from "../../assets/icons/OnboardingIcons/rest.svg";

const optionIcons = {
    1: readingIcon,
    2: listeningIcon,
    3: stretchingIcon,
    4: mindControlIcon,

    5: movingIcon,
    6: beforeAppointmentIcon,
    7: restingTimeIcon,
    8: workingIcon,

    9: trendTopicIcon,
    10: mentalCareIcon,
    11: exerciseIcon,
    12: restIcon,
};

const OptionSelect = ({ options, selectedOptionIds, onSelect }) => {

    return (
        <S.OptionGrid>
            {options.map((option) => {
                const isSelected = selectedOptionIds.includes(option.option_id);

                return(
                    <S.Option key={option.option_id}>
                        <S.Button 
                        type="button"
                        $isSelected={isSelected}
                        onClick={()=>onSelect(option.option_id)}
                        >
                            <S.Icon
                                src={optionIcons[option.option_id]}
                                alt={`${option.content} 아이콘`}
                            />
                        </S.Button>
                        <S.Label $isSelected={isSelected}>
                            {option.content}
                        </S.Label>
                    </S.Option>
                );
            })}
        </S.OptionGrid>
    )
}

export default OptionSelect