import { ConnectButton } from "@rainbow-me/rainbowkit";

function Wallet() {
return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
}

export default Wallet;
