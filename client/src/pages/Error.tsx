import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <h3>not found 🫠</h3>
      <h4> try something else!</h4>
      <Button onClick={() => navigate("/")}>i want home 😢!</Button>
    </div>
  );
}

export default Error;
