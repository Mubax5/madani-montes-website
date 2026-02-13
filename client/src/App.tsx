import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Bimbel from "@/pages/Bimbel";
import TrainingParenting from "@/pages/TrainingParenting";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tentang" component={About} />
      
      {/* Both routes use the same component but it handles logic based on URL */}
      <Route path="/program-sekolah" component={Programs} />
      <Route path="/program-unggulan" component={Programs} />
      
      <Route path="/bimbel" component={Bimbel} />
      <Route path="/training-parenting" component={TrainingParenting} />
      <Route path="/galeri" component={Gallery} />
      <Route path="/kontak" component={Contact} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
