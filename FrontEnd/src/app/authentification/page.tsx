"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignUpForm';
import { cn } from '@/lib/utils';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <div className="flex flex-1">
        <div className={cn(
          "flex flex-col md:flex-row w-full transition-all duration-300 ease-in-out",
        )}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div 
              key={isLogin ? "image-left" : "image-right"}
              initial={{ x: isLogin ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isLogin ? 50 : -50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "w-full md:w-1/2 bg-cover bg-center",
                isLogin ? "order-1 md:order-1" : "order-1 md:order-2"
              )}
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80')`,
                minHeight: '300px',
              }}
            />
          </AnimatePresence>

          <AnimatePresence initial={false} mode="wait">
            <motion.div 
              key={isLogin ? "login-form" : "signup-form"}
              initial={{ x: isLogin ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isLogin ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "w-full md:w-1/2 flex items-center justify-center p-6 md:p-12",
                isLogin ? "order-2 md:order-2" : "order-2 md:order-1"
              )}
            >
              <div className="w-full max-w-md">
                {isLogin ? (
                  <LoginForm onToggle={toggleForm} />
                ) : (
                  <SignupForm onToggle={toggleForm} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Login;