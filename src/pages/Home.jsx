import React from "react";
import Groceries from "../components/Groceries";
import Smartphones from "../components/Smartphones";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div>
      <Groceries />
      <Smartphones />
    </motion.div>
  );
}
