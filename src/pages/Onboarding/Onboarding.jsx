import OnboardingHeader from "../../components/onboarding/OnboardingHeader.jsx"
import OptionSelect from "../../components/onboarding/OptionSelect.jsx";

const Onboarding = () => {
  return (
    <>
    <OnboardingHeader 
      currentStep={2}
      totalStep={3}
    />
    <OptionSelect>
      
    </OptionSelect>
    </>
  )
};

export default Onboarding;