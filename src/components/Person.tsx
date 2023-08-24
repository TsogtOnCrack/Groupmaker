import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";

export const Person = ({gender}: any) => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <h4>Name of Person</h4>
        <Badge className=" uppercase" variant={gender == "M" ? "default": "secondary"}>fmail</Badge>
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <Slider className="w-[170px]"/>
        <h4 className=" text-2xl font-extralight">:20</h4>
      </CardContent>
    </Card>
  );
};
