import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Table, TableHead, TableRow, TableCell, TableBody } from "../../components/ui/table";
import { Plus, Filter, Check, X, Trash2 } from "lucide-react";

const dummyPartners = [
  {
    id: 1,
    name: "Asha Trust",
    type: "NGO",
    status: "Verified",
    location: "Delhi",
    contact: "+91-9876543210",
    receipts: 124,
    feedback: 4.7,
  },
  {
    id: 2,
    name: "Helping Hands",
    type: "Volunteer",
    status: "Pending",
    location: "Mumbai",
    contact: "+91-9123456780",
    receipts: 30,
    feedback: 4.2,
  },
  {
    id: 3,
    name: "Feeding India",
    type: "NGO",
    status: "Verified",
    location: "Bangalore",
    contact: "+91-9345628710",
    receipts: 198,
    feedback: 4.9,
  },
];

const Partners = () => {
  const [search, setSearch] = useState("");

  const filteredPartners = dummyPartners.filter((partner) =>
    partner.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">NGO & Volunteer Management</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-1" />
            Add Partner
          </Button>
        </div>
      </div>

      <Card className="shadow-lg">
        <CardContent className="p-4">
          <Input
            placeholder="Search NGOs or Volunteers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />

          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Receipts</TableCell>
                  <TableCell>Feedback</TableCell>
                  <TableCell className="text-right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPartners.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{p.type}</Badge>
                    </TableCell>
                    <TableCell>
                      {p.status === "Verified" ? (
                        <Badge variant="success">Verified</Badge>
                      ) : (
                        <Badge variant="destructive">Pending</Badge>
                      )}
                    </TableCell>
                    <TableCell>{p.location}</TableCell>
                    <TableCell>{p.contact}</TableCell>
                    <TableCell>{p.receipts}</TableCell>
                    <TableCell>{p.feedback} ⭐</TableCell>
                    <TableCell className="text-right flex gap-2 justify-end">
                      {p.status === "Pending" && (
                        <>
                          <Button size="icon" variant="success">
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="destructive">
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      <Button size="icon" variant="ghost">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Partners;
