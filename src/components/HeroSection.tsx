// Imports
import { Box, Typography, Button, Stack, Chip } from '@mui/material';

// Component
const HeroSection = () => {
  return (
    <Box
      sx={{
        px: 24,
        py: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            color: 'primary.main',
            mb: 3
          }}
        >
          Career Clarity Built on Real Hiring Experience
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'text.secondary',
            mb: 2
          }}
        >
          FreshGradPrep helps students, fresh graduates, and professionals
          understand how recruitment actually works — so they can position
          themselves strategically in today's job market.
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'accent.main',fontWeight: 600,fontSize: '0.8rem', mb: 4 }}
        >
          Built on real HR insight and 9 years of hiring experience.
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            color="highlight"
            sx={{
              '&:hover': {
                color: '#646cff',
                backgroundColor: 'highlight.main'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
          >
            Book a Career Session
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              '&:focus': {
                outline: 'none'
              }
            }}
          >
            Explore Services
          </Button>
        </Stack>

        {/* Tags */}
        <Stack direction="row" spacing={1}>
          <Chip
            label="Real HR Insight"
            variant="outlined"
            sx={{
              fontWeight: 550,
              fontSize: '0.7rem',
              color: 'primary.main',
              backgroundColor: 'secondary.main',
              borderColor: 'secondary.main'
            }}
          />

          <Chip
            label="Practical Guidance"
            variant="outlined"
            sx={{
              fontWeight: 550,
              fontSize: '0.7rem',
              color: 'primary.main',
              backgroundColor: 'secondary.main',
              borderColor: 'secondary.main'
            }}
          />

          <Chip
            label="Structured Clarity"
            variant="outlined"
            sx={{
              fontWeight: 550,
              fontSize: '0.7rem',
              color: 'primary.main',
              backgroundColor: 'secondary.main',
              borderColor: 'secondary.main'
            }}
          />
        </Stack>
      </Box>

      {/* RIGHT IMAGE PLACEHOLDER */}
      <Box
  sx={{
    width: 450,
    height: 300,
    borderRadius: 4,
    background: 'linear-gradient(to bottom right, #e8e3cc, #fffffff0)',
    border: '2px dashed black',
    borderColor: 'text.secondary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
        <Typography variant="body2" color="text.secondary">
          Founder image, brand visual, or illustration
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;