export const DAY_NAMES_SHORT: readonly string[] = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
];

export const DAY_NAMES_LONG: readonly string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export interface Workers {
	readonly id: number;
	name: string;
	shifts: string[];
	totalHours: number;
	role: "Manager" | "Decorator" | "ShiftLead" | "SalesAssociate";

	availability: WorkerAvailability[];
	requests?: WorkerRequests[];
}

type Day =
	| "Sunday"
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday";
type Hour =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12";
type Minute = "00" | "30";
type Meridium = "AM" | "PM";

export interface WorkerAvailability {
	readonly day: Day;
	isAvailable: boolean;

	startHour?: Hour;
	startMinute?: Minute;
	startPeriod?: Meridium;

	endHour?: Hour;
	endMinute?: Minute;
	endPeriod?: Meridium;
}

export interface WorkerRequests {
	readonly id: number;
	isOneDay: boolean;

	reason: "Family" | "Vacation" | "Appointment" | "Sick";

	startDate: Date; // should only be mm/dd/yyyy, no time
	endDate?: Date; // should only be mm/dd/yyyy, no time
}

export const EXAMPLE_WORKERS: Workers[] = [
	{
		id: 1,
		name: "Alice Smith",
		shifts: [
			"OFF",
			"OFF",
			"OFF",
			"8:00AM-4:00PM",
			"8:00AM-4:00PM",
			"OFF",
			"OFF",
		],
		totalHours: 16,
		role: "Manager",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{
				day: "Monday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Tuesday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Friday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Saturday", isAvailable: false },
		],
		requests: [
			{
				id: 101,
				isOneDay: false,
				reason: "Vacation",
				startDate: new Date("2026-08-10"),
				endDate: new Date("2026-08-14"),
			},
		],
	},
	{
		id: 2,
		name: "Bob Jones",
		shifts: [
			"OFF",
			"OFF",
			"OFF",
			"OFF",
			"OFF",
			"6:00AM-2:30PM",
			"6:00AM-2:30PM",
		],
		totalHours: 17,
		role: "Decorator",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{ day: "Monday", isAvailable: false },
			{ day: "Tuesday", isAvailable: false },
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "3",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "3",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Friday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "3",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Saturday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "12",
				endMinute: "30",
				endPeriod: "PM",
			},
		],
		requests: [], // No active requests
	},
	{
		id: 3,
		name: "Charlie Brown",
		shifts: [
			"OFF",
			"12:00PM-8:30PM",
			"12:00PM-8:30PM",
			"OFF",
			"OFF",
			"OFF",
			"OFF",
		],
		totalHours: 17,
		role: "ShiftLead",
		availability: [
			{
				day: "Sunday",
				isAvailable: true,
				startHour: "11",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "7",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Monday",
				isAvailable: true,
				startHour: "12",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "9",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Tuesday",
				isAvailable: true,
				startHour: "12",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "9",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "12",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "9",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Thursday", isAvailable: false },
			{ day: "Friday", isAvailable: false },
			{
				day: "Saturday",
				isAvailable: true,
				startHour: "11",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "7",
				endMinute: "00",
				endPeriod: "PM",
			},
		],
		requests: [
			{
				id: 102,
				isOneDay: true,
				reason: "Appointment",
				startDate: new Date("2026-07-21"),
			},
		],
	},
	{
		id: 4,
		name: "Diana Prince",
		shifts: ["OFF", "OFF", "OFF", "OFF", "OFF", "OFF", "9:00AM-5:00PM"],
		totalHours: 8,
		role: "SalesAssociate",
		availability: [
			{
				day: "Sunday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Monday", isAvailable: false },
			{ day: "Tuesday", isAvailable: false },
			{ day: "Wednesday", isAvailable: false },
			{ day: "Thursday", isAvailable: false },
			{ day: "Friday", isAvailable: false },
			{
				day: "Saturday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
		],
		requests: [
			{
				id: 103,
				isOneDay: false,
				reason: "Family",
				startDate: new Date("2026-07-18"),
				endDate: new Date("2026-07-19"),
			},
		],
	},
	{
		id: 5,
		name: "Evan Wright",
		shifts: [
			"OFF",
			"8:00AM-4:00PM",
			"OFF",
			"8:00AM-4:00PM",
			"OFF",
			"8:00AM-4:00PM",
			"OFF",
		],
		totalHours: 24,
		role: "SalesAssociate",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{
				day: "Monday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Tuesday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Friday",
				isAvailable: true,
				startHour: "8",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Saturday", isAvailable: false },
		],
		requests: [],
	},
	{
		id: 6,
		name: "Fiona Gallagher",
		shifts: [
			"OFF",
			"OFF",
			"OFF",
			"OFF",
			"4:00PM-9:30PM",
			"4:00PM-9:30PM",
			"OFF",
		],
		totalHours: 11,
		role: "SalesAssociate",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{ day: "Monday", isAvailable: false },
			{ day: "Tuesday", isAvailable: false },
			{ day: "Wednesday", isAvailable: false },
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "4",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "10",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Friday",
				isAvailable: true,
				startHour: "4",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "10",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Saturday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "10",
				endMinute: "00",
				endPeriod: "PM",
			},
		],
		requests: [
			{
				id: 104,
				isOneDay: true,
				reason: "Sick",
				startDate: new Date("2026-07-16"),
			},
		],
	},
	{
		id: 7,
		name: "George Clark",
		shifts: [
			"OFF",
			"OFF",
			"6:00AM-2:00PM",
			"6:00AM-2:00PM",
			"OFF",
			"OFF",
			"OFF",
		],
		totalHours: 16,
		role: "Decorator",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{
				day: "Monday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "2",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Tuesday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "2",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "2",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "6",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "2",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Friday", isAvailable: false },
			{ day: "Saturday", isAvailable: false },
		],
		requests: [],
	},
	{
		id: 8,
		name: "Hannah Abbott",
		shifts: [
			"11:00AM-5:00PM",
			"OFF",
			"OFF",
			"OFF",
			"OFF",
			"OFF",
			"12:00PM-8:00PM",
		],
		totalHours: 14,
		role: "ShiftLead",
		availability: [
			{
				day: "Sunday",
				isAvailable: true,
				startHour: "11",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "6",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Monday", isAvailable: false },
			{ day: "Tuesday", isAvailable: false },
			{ day: "Wednesday", isAvailable: false },
			{ day: "Thursday", isAvailable: false },
			{
				day: "Friday",
				isAvailable: true,
				startHour: "4",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "9",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Saturday",
				isAvailable: true,
				startHour: "12",
				startMinute: "00",
				startPeriod: "PM",
				endHour: "9",
				endMinute: "00",
				endPeriod: "PM",
			},
		],
		requests: [],
	},
	{
		id: 9,
		name: "Ian Malcolm",
		shifts: ["OFF", "OFF", "OFF", "OFF", "OFF", "OFF", "OFF"],
		totalHours: 0,
		role: "SalesAssociate",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{
				day: "Monday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Tuesday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Friday",
				isAvailable: true,
				startHour: "9",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "5",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Saturday", isAvailable: false },
		],
		requests: [
			{
				id: 105,
				isOneDay: false,
				reason: "Vacation",
				startDate: new Date("2026-07-27"),
				endDate: new Date("2026-07-31"),
			},
		],
	},
	{
		id: 10,
		name: "Julia Roberts",
		shifts: [
			"OFF",
			"OFF",
			"OFF",
			"OFF",
			"8:00AM-4:00PM",
			"8:00AM-4:00PM",
			"OFF",
		],
		totalHours: 16,
		role: "Decorator",
		availability: [
			{ day: "Sunday", isAvailable: false },
			{ day: "Monday", isAvailable: false },
			{
				day: "Tuesday",
				isAvailable: true,
				startHour: "7",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Wednesday",
				isAvailable: true,
				startHour: "7",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Thursday",
				isAvailable: true,
				startHour: "7",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{
				day: "Friday",
				isAvailable: true,
				startHour: "7",
				startMinute: "00",
				startPeriod: "AM",
				endHour: "4",
				endMinute: "00",
				endPeriod: "PM",
			},
			{ day: "Saturday", isAvailable: false },
		],
		requests: [],
	},
];
