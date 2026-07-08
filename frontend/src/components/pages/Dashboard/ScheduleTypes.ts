export interface Workers {
	id: number;
	name: string;
	shifts: string[];
	totalHours: number;
	role: "Manager" | "Decorator" | "ShiftLead" | "SalesAssociate";
}
