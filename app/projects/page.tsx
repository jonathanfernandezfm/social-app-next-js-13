import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle } from "lucide-react";

const projects = Array(15).fill({
  id: "PRO001",
  status: <Badge variant="outline">Finalized</Badge>,
  name: "Project Scenario",
  company: "Company",
  amount: "$250.00",
});

export default function Projects() {
  return (
    <div>
      <h1 className="mb-12 text-3xl ">Projects</h1>
      <Alert>
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This table is still under maintenance and the data might not be up to
          date.
        </AlertDescription>
      </Alert>
      <Table className="mt-10">
        <TableCaption>A list of your recent projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Project ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.id}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.company}</TableCell>
              <TableCell className="text-right">{project.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
