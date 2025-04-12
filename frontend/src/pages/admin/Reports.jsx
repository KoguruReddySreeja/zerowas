import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Table, TableHead, TableRow, TableCell, TableBody } from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { CalendarDays, FileText, Download } from "lucide-react";

const foodSavedData = [
  { date: "Mon", amount: 120 },
  { date: "Tue", amount: 200 },
  { date: "Wed", amount: 150 },
  { date: "Thu", amount: 250 },
  { date: "Fri", amount: 180 },
  { date: "Sat", amount: 300 },
  { date: "Sun", amount: 220 },
];

const topDonors = [
  { name: "Zomato Feeding", total: 550 },
  { name: "Asha NGO", total: 430 },
  { name: "FoodKind", total: 380 },
];

const Reports = () => {
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">📊 Reports & Analytics</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Export PDF
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input placeholder="Region (e.g. Mumbai)" value={region} onChange={(e) => setRegion(e.target.value)} />
        <Input placeholder="Role (Donor / NGO)" value={role} onChange={(e) => setRole(e.target.value)} />
        <Input placeholder="Time (Last 7 days)" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>

      {/* Emissions Card */}
      <Card className="bg-green-50 border-green-400 border">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">♻️ Emissions Prevented</h3>
              <p className="text-3xl font-bold mt-2">2.1 kgCO₂e</p>
              <p className="text-sm text-muted-foreground">Based on recent donations</p>
            </div>
            <CalendarDays className="w-10 h-10 text-green-600" />
          </div>
        </CardContent>
      </Card>

      {/* Food Saved Chart */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">🍱 Food Saved (This Week)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={foodSavedData}>
              <defs>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="amount" stroke="#10b981" fillOpacity={1} fill="url(#colorAmt)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Donors */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">🏅 Top Donors / NGOs</h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Total Donations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topDonors.map((d, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{d.total}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Future: Add Heatmap and more charts */}
    </div>
  );
};

export default Reports;
