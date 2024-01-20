import Image from "next/image";
import { useAccount, useEnsName } from "wagmi";
import Logo from "../../public/images/logo.svg";
import { ConnectKitButton } from "connectkit";
import { Big_Shoulders_Display } from "next/font/google";
import Card from "@/components/Card";
import Table from "@/components/Table";
import { Download, Plus, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  const { address } = useAccount();
  const { data: ensName, isLoading } = useEnsName({ address });

  return (
    <main
      className={`flex gap-10 w-screen min-h-screen bg-[#F6F6F6] text-black flex-col items-center px-24 py-4 ${bigShouldersDisplay.className}`}
    >
      <div className="flex w-full justify-between">
        <Image src={Logo} alt="Logo" />
        <ConnectKitButton />
      </div>
      <div className="flex items-center text-[64px] gap-20 bg-white rounded-3xl p-8 w-full">
        <p className="">
          HELLO <br />{" "}
          <span className="truncate">
            {ensName ? `${ensName.toLocaleUpperCase()}` : address}
          </span>
        </p>
        <p>$69.420</p>
      </div>
      <div className="flex w-full gap-8">
        <Card
          icon={<Plus />}
          heading="DEPOSIT"
          subtext="ETH"
          className="bg-[#05B274]"
        />
        <Dialog>
          <DialogTrigger className="w-full">
            <Card
              icon={<Download />}
              heading="RECIEVE"
              subtext="GHO"
              className="bg-[#9396FF]"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col gap-4">
              <DialogTitle className="text-[22px]">DEPOSIT</DialogTitle>
              <DialogDescription>
                <form className="flex flex-col gap-4">
                  <div className="flex relative flex-col gap-1">
                    <input
                      className="rounded-xl  border px-4 py-3"
                      name="amount"
                    />
                    <p className="absolute right-0 -translate-x-1/2 cursor-pointer font-bold translate-y-3 text-[22px] text-[#9396FF]">
                      MAX
                    </p>
                    <p className="text-end text-[22px] text-black font-bold">
                      BAL : 1234 GHO
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="recipientAddress"
                      className="text-[#989898]"
                    >
                      RECIEVING CHAIN
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="BASE" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="base">BASE</SelectItem>
                        <SelectItem value="eth">ETH</SelectItem>
                        <SelectItem value="gho">GHO</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <button className="bg-[#9396FF] rounded-xl text-black text-[22px] font-bold py-3 mt-10">
                    DEPOSIT
                  </button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="w-full">
            <Card
              icon={<Send />}
              heading="SEND"
              subtext="GHO"
              className="bg-[#F5E26A]"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col gap-4">
              <DialogTitle className="text-[22px]">SEND</DialogTitle>
              <DialogDescription>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="recipientAddress"
                      className="text-[#989898]"
                    >
                      RECIPIENT ADDRESS
                    </label>
                    <input
                      className="rounded-xl border px-4 py-3"
                      name="recipientAddress"
                    />
                  </div>
                  <div className="flex relative flex-col gap-1">
                    <input
                      className="rounded-xl  border px-4 py-3"
                      name="amount"
                    />
                    <p className="absolute right-0 -translate-x-1/2 cursor-pointer font-bold translate-y-3 text-[22px] text-[#9396FF]">
                      MAX
                    </p>
                    <p className="text-end text-[22px] text-black font-bold">
                      BAL : 1234 GHO
                    </p>
                  </div>
                  <button className="bg-[#F5E26A] rounded-xl text-black text-[22px] font-bold py-3 mt-10">
                    SEND
                  </button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Table
        title="TRANSACTION HISTORY"
        data={[
          {
            action: "Deposit",
            amountEth: "0.000000000000000000",
            amountGho: "0.000000000000000000",
            assetChain: "ETH",
            txHash: "0x00000",
          },
        ]}
      />
    </main>
  );
}
