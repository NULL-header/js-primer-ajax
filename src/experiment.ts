const ber = "==============";
const runExperiment = (
  target: Experiment,
  name: string,
  descriptor: TypedPropertyDescriptor<any>
) => {
  const f = descriptor.value;
  if (!f) throw new Error("The decorator can be used normal method.");
  console.log(ber);
  console.log(name);
  f();
  console.log(ber);
};

class Experiment {}

const exp = new Experiment();
