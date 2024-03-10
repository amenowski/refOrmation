import React, { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  return <div>ProtectedRoute</div>;
}

export default ProtectedRoute;
