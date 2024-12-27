import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  businessHours: { day: string; hours: string[] }[];
}

function OpenTimeTable({ businessHours }: Props) {
  return (
    <div className="w-96 xl:w-[350px] lg:row-start-4 lg:row-end-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Morning</TableHead>
            <TableHead>Afternoon</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {businessHours.map((data) => (
            <TableRow key={data.day}>
              <TableCell className="font-medium">{data.day}</TableCell>
              <TableCell>{data.hours[0] || "Unknown"}</TableCell>
              <TableCell>{data.hours[1] || "Unknown"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default OpenTimeTable;
