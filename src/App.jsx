import { useState, useEffect } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set launch date (60 days from now)
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 60)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
    }}>
      {/* Main Content */}
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Logo/Brand */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Lingowire
        </h1>

        {/* Headline */}
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: 'white',
          marginBottom: '1rem',
          lineHeight: '1.2',
        }}>
          Learn Any Language Through Real Conversations
        </h2>

        {/* Sub-headline */}
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2rem',
          lineHeight: '1.5',
        }}>
          Connect with native speakers and build fluency naturally. 
          Coming soon to iOS and Android.
        </p>

        {/* Countdown Timer */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '1rem', 
            marginBottom: '1rem',
            fontWeight: '500'
          }}>
            Launching in:
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                width: '70px',
                height: '70px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                {timeLeft.days}
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', marginTop: '0.5rem' }}>Days</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                width: '70px',
                height: '70px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                {timeLeft.hours}
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', marginTop: '0.5rem' }}>Hours</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                width: '70px',
                height: '70px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                {timeLeft.minutes}
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', marginTop: '0.5rem' }}>Minutes</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                width: '70px',
                height: '70px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                {timeLeft.seconds}
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', marginTop: '0.5rem' }}>Seconds</p>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '1rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '50px',
              border: 'none',
              outline: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: '#333',
            }}
          />
          
          <button
            type="submit"
            style={{
              padding: '1rem 3rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: 'white',
              color: '#667eea',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            Join Waitlist
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            color: 'white',
            fontSize: '1rem',
          }}>
            ✓ Thank you! We'll notify you when Lingowire launches.
          </div>
        )}

        {/* Footer text */}
        <p style={{
          marginTop: '3rem',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.7)',
        }}>
          Be the first to experience the future of language learning
        </p>
      </div>
    </div>
  )
}

export default App
