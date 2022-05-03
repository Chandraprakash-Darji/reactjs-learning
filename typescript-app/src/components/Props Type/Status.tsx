type StatusProps = {
  // Only Three types :::
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") message = "Loading...";
  else if (status === "success") message = "Data fetched successfully!";
  else if (status === "error") message = "Error fetching Data";
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
