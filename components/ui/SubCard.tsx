import { Card, CardDescription, CardHeader } from "./card";

const SubCard = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
    <Card className="p-6 bg-dark-400 rounded-lg border-none w-fit flex flex-col gap-y-3">
      <CardHeader className="p-0 text-16-semibold">{header}</CardHeader>
      <CardDescription className="text-14-regular">{description}</CardDescription>
    </Card>
  );
};

export default SubCard;
