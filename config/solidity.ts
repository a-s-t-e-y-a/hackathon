import { ethers } from "ethers";

const contractABI = [
  {
    inputs: [{ internalType: "address", name: "_Archie", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "eventName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resalePrice",
        type: "uint256",
      },
    ],
    name: "TicketListedForResale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
    ],
    name: "TicketPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "eventName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TicketResold",
    type: "event",
  },
  {
    inputs: [],
    name: "Archie",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_eventId", type: "uint256" },
      { internalType: "uint256", name: "_ticketId", type: "uint256" },
    ],
    name: "buyResaleTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_eventId", type: "uint256" },
      { internalType: "uint256", name: "_ticketId", type: "uint256" },
    ],
    name: "buyTicket",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_eventId", type: "uint256" },
      { internalType: "uint256", name: "_totalTickets", type: "uint256" },
      { internalType: "string", name: "_eventName", type: "string" },
      { internalType: "uint256", name: "_ticketPrice", type: "uint256" },
      { internalType: "uint256", name: "_eventTime", type: "uint256" },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "events",
    outputs: [
      { internalType: "string", name: "eventName", type: "string" },
      { internalType: "uint256", name: "ticketPrice", type: "uint256" },
      { internalType: "uint256", name: "maxResellPrice", type: "uint256" },
      { internalType: "uint256", name: "totalTickets", type: "uint256" },
      { internalType: "uint256", name: "ticketsSold", type: "uint256" },
      { internalType: "uint256", name: "eventTime", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_eventId", type: "uint256" },
      { internalType: "uint256", name: "_ticketId", type: "uint256" },
    ],
    name: "getTicketOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_eventId", type: "uint256" },
      { internalType: "uint256", name: "_ticketId", type: "uint256" },
      { internalType: "uint256", name: "_resalePrice", type: "uint256" },
    ],
    name: "listTicketForResale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "organizer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "tickets",
    outputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bool", name: "forSale", type: "bool" },
      { internalType: "uint256", name: "resalePrice", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as any;
const contractAddress = process.env.YOUR_CONTRACT_ADDRESS;

// Replace with your Ethereum node URL (e.g., Infura endpoint)
const provider = new ethers.JsonRpcProvider(process.env.YOUR_ETHEREUM_NODE_URL);

// Replace with the private key of the account you want to use
const privateKey = process.env.YOUR_PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export default contract;
