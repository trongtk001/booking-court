import Button from "@/Components/button";
import Example from "./exmaple/page";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <Example />
      </div>
    </>
  );
}
