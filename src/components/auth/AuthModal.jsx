import React, { useState } from 'react';
import { useCars } from '../../context/CarContext';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Sparkles, 
  KeyRound, 
  ArrowRight, 
  CheckCircle2, 
  Crown,
  Smartphone
} from 'lucide-react';

export default function AuthModal() {
  const { 
    isAuthModalOpen, 
    closeAuth, 
    authMode, 
    setAuthMode, 
    login, 
    signup, 
    resetPassword,
    showToast 
  } = useCars();

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Sign up form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupCategory, setSignupCategory] = useState('Flagship Luxury SUVs');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Forgot password form state
  const [forgotStep, setForgotStep] = useState(1); // 1: enter identifier, 2: enter otp, 3: set new password
  const [forgotIdentifier, setForgotIdentifier] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginIdentifier || !loginPassword) {
      showToast('Please enter your email/mobile and password', 'info');
      return;
    }
    login(loginIdentifier, loginPassword);
  };

  const handleQuickDemoLogin = () => {
    login('kabir.sharma@apex-motors.in', 'ApexVIP2026!');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPhone || !signupPassword) {
      showToast('Please complete all required fields', 'info');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      showToast('Passwords do not match', 'info');
      return;
    }
    signup({
      name: signupName,
      email: signupEmail,
      phone: signupPhone,
      preferredCategory: signupCategory
    });
  };

  const handleForgotRequestOtp = (e) => {
    e.preventDefault();
    if (!forgotIdentifier) {
      showToast('Please enter your registered email or mobile number', 'info');
      return;
    }
    setForgotStep(2);
    showToast('Verification OTP sent to your contact! (Demo OTP: 4920)', 'gold');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otpCode !== '4920' && otpCode.length < 4) {
      showToast('Invalid OTP. Use demo OTP: 4920', 'info');
      return;
    }
    setForgotStep(3);
    showToast('Identity verified. Please set your new password.', 'gold');
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      showToast('Password must be at least 6 characters', 'info');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      showToast('Passwords do not match', 'info');
      return;
    }
    resetPassword(forgotIdentifier, newPassword);
    setForgotStep(1);
    setForgotIdentifier('');
    setOtpCode('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950/90 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/30">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-heading font-black text-lg text-white">
                Apex Motoring Atelier
              </h2>
              <p className="text-[11px] text-slate-400">
                VIP Private Member Authentication
              </p>
            </div>
          </div>

          <button
            onClick={closeAuth}
            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector (Sign In vs Sign Up) */}
        {authMode !== 'forgot' && (
          <div className="flex border-b border-white/10 bg-dark-950/40 p-1.5 gap-1.5">
            <button
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                authMode === 'login'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 shadow-glow-gold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                authMode === 'signup'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 shadow-glow-gold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Join Atelier
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          
          {/* ================= MODE: LOGIN ================= */}
          {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Email Address or Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="e.g. kabir.sharma@apex.in or 98200 12345"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('forgot');
                      setForgotStep(1);
                    }}
                    className="text-xs text-gold-400 hover:text-gold-300 font-medium transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter confidential password"
                    required
                    className="w-full pl-10 pr-11 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-white/20 text-gold-500 focus:ring-gold-500"
                  />
                  <span>Remember my credentials</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-dark-950 font-bold text-sm uppercase tracking-wider shadow-glow-gold hover:brightness-110 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Sign In to Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Quick Demo Login */}
              <div className="relative py-2 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <span className="relative px-3 bg-dark-900 text-[11px] text-slate-500 uppercase tracking-widest">
                  Quick Access
                </span>
              </div>

              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full py-2.5 rounded-xl bg-dark-950 border border-gold-500/30 hover:border-gold-500/60 text-gold-400 hover:text-gold-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>One-Click Demo VIP Member Sign In</span>
              </button>
            </form>
          )}

          {/* ================= MODE: SIGN UP ================= */}
          {authMode === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    placeholder="e.g. Vikramaditya Rathore"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="vikram@estate.in"
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Mobile (+91 India)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      placeholder="+91 98200 88888"
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                  Primary Automotive Interest
                </label>
                <select
                  value={signupCategory}
                  onChange={(e) => setSignupCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                >
                  <option value="Indigenous Supercars">Indigenous Supercars (Vazirani Shul, DC Avanti)</option>
                  <option value="Tough 4x4 & Off-Roaders">Tough 4x4 & Off-Roaders (Thar ROXX, Gurkha)</option>
                  <option value="Flagship Luxury SUVs">Flagship Luxury SUVs (Tata Safari, Fortuner, XUV700)</option>
                  <option value="Indian Electric (EV)">Indian Electric EV Fleet (Curvv EV, Tata EV)</option>
                  <option value="Prestige Royalty & Salons">Prestige Royalty & Salons (Land Cruiser, Maybach)</option>
                </select>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400 pt-1">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="rounded border-white/20 text-gold-500 focus:ring-gold-500"
                />
                <span>I agree to the Apex Atelier Concierge Charter & Privacy Policy</span>
              </label>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-dark-950 font-bold text-sm uppercase tracking-wider shadow-glow-gold hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Create VIP Membership</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* ================= MODE: FORGOT PASSWORD ================= */}
          {authMode === 'forgot' && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto mb-2">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-xl text-white">
                  Reset Atelier Password
                </h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                  Secure multi-factor identity verification for Apex registered collectors
                </p>
              </div>

              {/* Step 1: Identifier Input */}
              {forgotStep === 1 && (
                <form onSubmit={handleForgotRequestOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Registered Email or Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={forgotIdentifier}
                        onChange={(e) => setForgotIdentifier(e.target.value)}
                        placeholder="e.g. kabir.sharma@apex.in"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-dark-950 font-bold text-sm uppercase tracking-wider shadow-glow-gold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Verification OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Step 2: OTP Verification */}
              {forgotStep === 2 && (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 text-center">
                    A 4-digit security code was dispatched to: <span className="font-mono font-bold text-white">{forgotIdentifier}</span>
                    <div className="mt-1 font-mono text-gold-400 font-semibold">[Demo OTP: 4920]</div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Enter 4-Digit Verification Code
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="4920"
                      required
                      className="w-full text-center tracking-[0.5em] font-mono text-2xl py-3 rounded-xl bg-dark-950 border border-white/10 text-gold-400 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-dark-950 font-bold text-sm uppercase tracking-wider shadow-glow-gold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Verify Code</span>
                    <ShieldCheck className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Step 3: New Password */}
              {forgotStep === 3 && (
                <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="Repeat new password"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-dark-950 font-bold text-sm uppercase tracking-wider shadow-glow-gold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Update Password & Complete</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Back to Login Action */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setForgotStep(1);
                  }}
                  className="text-xs text-slate-400 hover:text-gold-400 transition-colors"
                >
                  ← Return to Member Sign In
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
