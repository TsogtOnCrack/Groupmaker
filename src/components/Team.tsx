import { CardTitle, CardContent, Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const list = [
  { name: "PersonId", skill: 12, gender: "F" },
  { name: "PersonId", skill: 12, gender: "F" },
  { name: "PersonId", skill: 12, gender: "F" },
  { name: "PersonId", skill: 12, gender: "F" },
];

export const Team = () => {
  return (
    <Card className="w-[250px] min-h-[230px] mr-3 mb-3">
      <CardHeader className="flex flex-row justify-between items-center">
        <h4 className=" text-lg ">GroupID</h4>
        <h4 className=" text-lg ">:123</h4>
      </CardHeader>
      <CardContent>
        {list.map((el) => {
          return (
            <div className="w-full flex flex-row justify-between my-3">
              <h4 className=" font-extralight">{el.name}</h4>
              <Badge
                className="cursor-pointer min-w-[50px] flex justify-center items-center"
                variant={el.gender == "M" ? "default" : "secondary"}
              >
                :{el.skill}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
