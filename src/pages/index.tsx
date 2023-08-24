import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Team } from "@/components/Team";
import { Bold } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

import { Person } from "@/components/Person";

const App = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-screen h-screen flex flex-row max-w-[1175px] justify-between  pt-4 mx-[10px]">
        <Card className="w-[350px] h-[95vh]">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>People</CardTitle>
            <div className="flex flex-row items-center">
              <CardTitle className="mr-4">:12</CardTitle>
              <Button>Add</Button>
            </div>
          </CardHeader>

          <CardContent>
            <Person />
          </CardContent>
        </Card>

        <div className="flex flex-col ml-5">
          <Card className="w-[750px]">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Configurations for</CardTitle>
              <CardTitle className="uppercase">:Project Name</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-between">
              <div className="flex flex-col w-[210px]">
                <div className="flex flex-row justify-between items-center">
                  <h4>Number of Teams</h4>
                  <h4 className=" text-2xl font-extralight border-b-2 border-black">
                    :20
                  </h4>
                </div>
                <div className="flex flex-row items-center mt-4">
                  <Slider className="mr-4" />
                  <Button className="uppercase">Set</Button>
                </div>
              </div>
              <Tabs defaultValue="Tsogt">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="Tsogt">Tsogt</TabsTrigger>
                  <TabsTrigger value="Greedy">Greedy</TabsTrigger>
                  <TabsTrigger value="Password">Gender</TabsTrigger>
                </TabsList>
              </Tabs>

              <Toggle aria-label="Toggle italic">Group</Toggle>
            </CardContent>
          </Card>

          <Card className=" shadow-none border-none ">
            <CardHeader>
              <CardTitle>Groups</CardTitle>
            </CardHeader>
            <div className="flex flex-wrap">
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
              <Team></Team>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
