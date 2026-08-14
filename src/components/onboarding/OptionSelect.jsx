import * as S from "./OptionSelect.styled"
import readingIcon from "../../assets/icons/OnboardingIcons/reading.png";
import listeningIcon from "../../assets/icons/OnboardingIcons/listening.png";
import stretchingIcon from "../../assets/icons/OnboardingIcons/stretching.png";
import mindControlIcon from "../../assets/icons/OnboardingIcons/mind-control.png";

import movingIcon from "../../assets/icons/OnboardingIcons/moving.png";
import beforeAppointmentIcon from "../../assets/icons/OnboardingIcons/before-appointment.png";
import restingTimeIcon from "../../assets/icons/OnboardingIcons/resting-time.png";
import workingIcon from "../../assets/icons/OnboardingIcons/working.png";

import trendTopicIcon from "../../assets/icons/OnboardingIcons/trend-topic.png";
import mentalCareIcon from "../../assets/icons/OnboardingIcons/mental-care.png";
import exerciseIcon from "../../assets/icons/OnboardingIcons/exercise.png";
import restIcon from "../../assets/icons/OnboardingIcons/rest.png";

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