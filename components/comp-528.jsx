import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "../components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Step One",
  },
  {
    step: 2,
    title: "Step Two",
  },
  {
    step: 3,
    title: "Step Three",
  },
  {
    step: 4,
    title: "Step Four",
  },
];

export default function Component() {
  return (
    <div className="h-full space-y-8 text-center">
      <Stepper defaultValue={3} orientation="vertical" className="flex h-full flex-col w-full" >
        {steps.map(({ step, title }) => (
          <StepperItem
            key={step}
            step={step}
            className="relative items-start not-last:flex-1">
            <StepperTrigger className="items-start rounded pb-12 last:pb-0">
              <StepperIndicator />
              <div className="mt-0.5 px-2 text-left">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
}
