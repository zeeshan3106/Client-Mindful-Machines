import React from 'react'

function REview() {
import { Card, CardContent, Typography, Box, Rating, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // You'll need to install @mui/icons-material

export default function ReviewCard() {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 4, boxShadow: 3 }}>
      <CardContent>
        {/* 1. Stars and Verification */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Rating value={5} readOnly size="small" />
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
            <CheckCircleIcon sx={{ fontSize: 14, mr: 0.5 }} />
            <Typography variant="caption" fontWeight="bold">Verified</Typography>
          </Box>
        </Box>

        {/* 2. Review Text */}
        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
          Scary good ANC
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
          "The ANC on the Pro 2 is actually scary good. I use them on the subway 
          every morning and it completely kills the screeching of the tracks..."
        </Typography>

        {/* 3. User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.8rem', mr: 1.5 }}>
            MT
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Marcus T.
            </Typography>
            <Typography variant="caption" color="text.disabled">
              April 2026
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
}

export default REview