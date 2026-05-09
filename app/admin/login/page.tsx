'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/config'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    await new Promise(r => setTimeout(r, 600))

    if (password === SITE_CONFIG.adminPassword) {
      document.cookie = 'admin_auth=true; path=/; max-age=86400; SameSite=Lax'
      router.push('/admin')
    } else {
      setError('Invalid credentials. Please try again.')
      setShake(true)
      setPassword('')
      setLoading(false)
      setTimeout(() => setShake(false), 600)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-sm relative">
        {/* Logo */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            Admin Access
          </p>
          <h1
            className="text-4xl font-light tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}
          >
            {SITE_CONFIG.brandName}
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={shake ? 'animate-shake' : ''}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '2px',
            padding: '2.5rem',
            animation: shake ? 'shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97)' : 'none',
          }}
        >
          <div className="mb-6">
            <label
              className="block text-xs tracking-[0.12em] uppercase mb-2"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Lock size={14} style={{ color: 'var(--text-muted)' }} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full pl-9 pr-10 py-3 text-sm"
                style={{
                  background: 'var(--bg-elevated)',
                  border: `1px solid ${error ? 'var(--red-accent)' : 'var(--border)'}`,
                  borderRadius: '2px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = error ? 'var(--red-accent)' : 'var(--border)')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword
                  ? <EyeOff size={14} style={{ color: 'var(--text-muted)' }} />
                  : <Eye size={14} style={{ color: 'var(--text-muted)' }} />
                }
              </button>
            </div>
            {error && (
              <p className="mt-2 text-xs" style={{ color: 'var(--red-accent)', fontFamily: 'var(--font-body)' }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3.5 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 disabled:opacity-50"
            style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: '#080808',
              borderRadius: '2px',
              fontFamily: 'var(--font-body)',
            }}
          >
            {loading ? 'Verifying...' : 'Enter Dashboard'}
          </button>
        </form>

        <p className="text-center text-xs mt-6" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          Protected area — authorized personnel only
        </p>
      </div>

      <style jsx global>{`
        @keyframes shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(3px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  )
}
